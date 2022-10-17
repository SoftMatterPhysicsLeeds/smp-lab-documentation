TA Universal Analysis
=====================
Author: Caitlin Probert

Analysing Peaks
---------------

For peaks with a linear baseline go to **Analyze>Integrate Peak>Linear**.  Two red crosses will appear either side of the peak, you should place these close to the peak on either side (not on the slopes of the peak itself) and then **right click>Accept Limits**.  The baseline for this method is taken as a line between the two selected limits.

For peaks with a non-linear baseline go to **Analyze>Integrate Peak>Sig Horizontal** or **Sig Tangent**.
    - **Sig Horizontal** will provide two red crosses, which can be placed in the same way as before.  This time, the baseline is calculated by drawing a sigmoidal function between the two points you select (based on horizontals from the points) and then puts a midpoint for this function between the horizontals.  
    - The **Sig Tangent** function is slightly more complicated; this function provides four crosses, which are to be placed on either side of the peak and represent the start and end point of a tangent either side.  These tangents are then joined with a sigmoid function-this is the baseline.

Analysing Glass Transitions
---------------------------

To analyse glass transition steps go to **Analyze>Glass Transition**.  This will bring up two red crosses, as before, which should be placed on either side of the transition step; be careful not to place these on other features (such as enthalpy relaxations) and then **right click>Accept Limits**.  This function draws a tangent from the two points you select and a tangent from an inflection point on the slope (this is the point with steepest slope on the curve).  The onset is the intersection between the first and second tangent, the midpoint is taken as the inflection point and the end is the intersection of the second and third tangents.  This analysis will give you the onset, midpoint and endpoint of the step/transition and can also give the height of the step.

General Tips/Tricks
-------------------

    - To control what is displayed when analysing peak and steps go to **Analyze>Options** and you can select what will be displayed for steps or peaks when analysis is performed
    - To see details about the sample, such as sample mass go to **Edit>File Information**
    - To see details about how the run was performed go to **View>Method Log**
    - To view the data as Heat Capacity (where applicable) go to **Graph>Signals** and select Heat Capacity in the y-axis dropdown menu
	- To overlay data from two runs go to **Graph>Overlay>Auto Configure** and then select the graphs you want to overlay and these can be viewed on a single plot (this is good for comparing)
