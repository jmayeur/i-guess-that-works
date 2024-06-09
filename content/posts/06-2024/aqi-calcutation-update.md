+++
author = 'Jeff Mayeur'
title = 'Update to the latest AQI ranges'
keywords = ['AQI']
description = 'Updating to the current AQI Levels as of May 2024'
tags = ['AQI',]
categories = ['Raspberry Pi']
series = 'AQI At Home'
date = 2024-06-08T08:00:00-07:00
draft = false
math = true
+++
# Is That Right
{{% centerimage src="/images/aqi-update/out_of_range.png" alt="The RaspberryPi powered AQI visualization showing a inaccurate AQI of 666" title="Devil's Range" %}}

## What's Changing
As I noted in the [AQI Everywhere](/posts/05-2024/aqi-everywhere/) post the forum where I had sourced my current AQI [calculation](https://forum.airnowtech.org/t/the-aqi-equation-2015-obsolete-on-may-6th-2024/169) had indicated that it was now obsolete, and instead pointed to an [updated calculation](https://forum.airnowtech.org/t/the-aqi-equation-2024-valid-beginning-may-6th-2024/453).  

After walking though the update post, it appeared that the only change was in μg/m3 ranges for each [AQI level](https://www.airnow.gov/aqi/aqi-basics/). Since monitor keys of PM2.5 I had to compare the first (obsolete) set of ranges with the second (updated) ranges and update the calculation code accordingly.

#### Obsolete Table
{{% centerimage src="/images/aqi-update/obsolete_pm25.png" alt="Obsolete Table of μg/m3 to AQI values for PM25 particulate pollution" title="Obsolete Ranges" %}}

#### Current Table
{{% centerimage src="/images/aqi-update/PM25_24hr.png" alt="Current table of μg/m3 to AQI values for PM25 particulate pollution" title="Current Ranges" %}}


You can see that in the for the "Good" AQI rating, the AQI Number is still between 0 and 50, but the μg/m3 ranges from a low of 0.0 to a hight of 9.0 in the updated calculation. The μg/m3 used to range between 9 and 12.0. To figure out what this means, lets look at the formula being applied to the raw μg/m3 data to calculate the final AQI value & level.

## Formula
AQI Calculation: $$ AQI = \frac{(AQI_{Hi}) - (AQI_{Lo})}{(Conc_{Hi}) - (Conc_{Lo})} * ((\bold{Conc_{i}}) - (Conc_{Lo})) + (AQI_{Lo}) $$

For the Good AQI Range with a raw reading of 4.5 μg/m3 
Good AQI Calculation: $$ AQI = \frac{(50) - (0)}{(9.0) - (0)} * ((\bold{4.5}) - (0)) + (0) $$
Simplified Good AQI Calculation: $$ AQI = \frac{50}{9.0} * \bold{4.5} $$

The raw reading of 4.5 μg/m3 would  generate an AQI score of 25. The formulate is basically mapping the raw range into the AQI range values. Good AQI has raw values from 0-9, where 0 μg/m3 = 0 AQI and 9.0 μg/m3 = 50 AQI. Since 4.5 μg/m3 is half way between 0 and 9. It's AQI is half way between 0 and 50.

## What do I need to fix?
In the end, I had to update a pretty straight forward function that figures out which "AQI Range" the raw reading falls into. I just needed to map the values from the updated table into my function and I'd be current. I'd be upgrading some particulate matter ratings to higher risk levels, and then handling the slightly confusing `Concentrations above 325.4 ug/m3 are still considered Hazardous and use the Hazardous breakpoints when calculating AQI` line.  Some previously Unhealthy Level concentrations were now Hazardous, but now the AQI Numerical values for concentrations above 325.4 ug/m3 would overlap with those between 225.5 and 325.4 ug/m3.


#### Obsolete Range Calculation
```javascript
const pm25aqi = (concentration) => {
    const _conc = parseFloat(concentration);
    const c = (Math.floor(10 * _conc)) / 10;
    switch (true) {
        case (c >= 0 && c < 12.1):
            return aqiEquation(50, 0, 12, 0, c);
        case (c >= 12.1 && c < 35.5):
            return aqiEquation(100, 51, 35.4, 12.1, c);
        case (c >= 35.5 && c < 55.5):
            return aqiEquation(150, 101, 55.4, 35.5, c);
        case (c >= 55.5 && c < 150.5):
            return aqiEquation(200, 151, 150.4, 55.5, c);
        case (c >= 150.5 && c < 250.5):
            return aqiEquation(300, 201, 250.4, 150.5, c);
        case (c >= 250.5 && c < 350.5):
            return aqiEquation(400, 301, 350.4, 250.5, c);
        case (c >= 350.5 && c < 500.5):
            return aqiEquation(500, 401, 500.4, 350.5, c);
        default:
            // We're in hell
            return 666;
    }
}
```
#### First Pass at an update
```javascript
const pm25aqi = (concentration) => {
    const _conc = parseFloat(concentration);
    const c = (Math.floor(1000 * _conc)) / 1000;
    switch (true) {
        case (c >= 0 && c < 9):
            return aqiEquation(50, 0, 9, 0, c);
        case (c >= 9.1 && c < 35.4):
            return aqiEquation(100, 51, 35.4, 9.1, c);
        case (c >= 35.5 && c < 55.5):
            return aqiEquation(150, 101, 55.4, 35.5, c);
        case (c >= 55.5 && c < 125.4):
            return aqiEquation(200, 151, 125.4, 55.5, c);
        case (c >= 125.5 && c < 225.4):
            return aqiEquation(300, 201, 225.4, 125.5, c);
        case (c >= 225.5 && c < 325.4):
            return aqiEquation(500, 301, 325.4, 225.5, c);
        case (c >= 325.5 && c < 500.4):
            return aqiEquation(500, 301, 325.4, 225.5, c);
        default:
            // We're in hell
            return 666;
    }
};
```

I updated [my function](https://github.com/jmayeur/outdoor-aqi/blob/main/web/weather_simp.js#L15) and everything was awesome, almost. I happened to glance at the visualization a few days back, and saw the screen above. I looked outside, sniffed, and became somewhat confused. within a minute the rating had updated back to 47 AQI/Green and everything was right with the world.

Except, it happened again. So there had to be a bug, in my code. Unbelievable. Of course a quick look at the lines below and I saw issue. If I had a concentration of 9, I would fall through to the default `666` value.
```javascript
case (c >= 0 && c < 9):
            return aqiEquation(50, 0, 9, 0, c);
        case (c >= 9.1 && c < 35.4):
```

 There were a few other quirks I had to iron out, but I think I've got it [corrected](https://github.com/jmayeur/outdoor-aqi/blob/main/web/weather_simp.js#L15) with the version below. 
```javascript
const pm25aqi = (concentration) => {
    const _conc = parseFloat(concentration);
    const c = (Math.floor(1000 * _conc)) / 1000;
    switch (true) {
        case (c >= 0 && c <= 9):
            return aqiEquation(50, 0, 9, 0, c);
        case (c >= 9.1 && c <= 35.4):
            return aqiEquation(100, 51, 35.4, 9.1, c);
        case (c >= 35.5 && c <= 55.4):
            return aqiEquation(150, 101, 55.4, 35.5, c);
        case (c >= 55.5 && c <= 125.4):
            return aqiEquation(200, 151, 125.4, 55.5, c);
        case (c >= 125.5 && c <= 225.4):
            return aqiEquation(300, 201, 225.4, 125.5, c);
        case (c >= 225.5 && c <= 325.4):
            return aqiEquation(500, 301, 325.4, 225.5, c);
        case (c >= 325.5 && c <= 500.4):
            return aqiEquation(500, 301, 500.4, 325.5, c);
        default:
            // We're in hell
            return 666;
    }
};
```

## Better
I'll revisit this function the future. I want to walk through it in more detail to see if it work's the way I'm expecting it to. I've also realized I need to clean up my [repo](https://github.com/jmayeur/outdoor-aqi). I plan to make specific ones for the each visualization approach, as well as monitor only code.  It's way to hard to know what's actually being used, and what was just throw away code.

#### QOTD
“The dream begins with a teacher who believes in you, who tugs and pushes and leads you to the next plateau, sometimes poking you with a sharp stick called truth.”
― Dan Rather