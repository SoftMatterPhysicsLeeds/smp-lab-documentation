Novocontrol Broadband Dielectric Spectrometer
=============================================

Setting up a measurement in software
------------------------------------

1. Start **WinDeta** (if it isn't already) and navigate to **Temp. Controller**. 
2. Select **Initialize from Controller**. If this has worked correctly then you should see the temperature of the sample, gas stream and Dewar in the **Status** window. 

.. note::
    You can choose whatever window placement you like within **WinDeta** but I've found that the most efficient is to tile the **Status**, **Message**, **Temperature Log** and **Online** windows together.
 

3. Navigate to **File => Set File Names** (important to change the name of the output file immediately so that you do not overrite someone else's measurement. )
4. Navigate to **Measurement => Sample Specification** and enter the required information. The **Description** box should contain information about your
sample (this information will appear at the top of any data you produce). The **Sample diameter** and **Sample thickness** (in mm) should also be entered - figure 4 shows how these values should be defined. For standard measurements (i.e. sample between two round electrodes), the **Cell Stray** should be set to **1** and **Spacer Area** can be set to 0. The checkbox for **Use Dielectric Sample Cell** should be checked.
5. Navigate to **Measurement => List Order**. Add **Temperature** to the **Order** column, if it isn't already. 
6. Naviagate to **Value Lists** to set the range of the variables in **List Order**. 
    a. The "standard" frequency range is between 10^-2 and 10^7 Hz but the analyser can only measure up to ~1e6. Change the range to something suitable.
    b. Add temperatures as needed to the temperature value list either individually or using **Insert** to insert a range of values. **MAKE SURE THAT YOU HAVE THE CHECKBOX FOR TEMPERATURE UNIT UNCHECKED IF YOUR TEMPERATURES ARE IN KELVIN**.

7. You can check the value lists and the approximate time the experiment will take (bearing in mind that the software does not take changing temperature into account very well and so the time in reality will be much longer...) by clicking **Measurement => Show Definitions**.
8. Once the value lists have been set, click **Measurement => Start** to begin the programmed run.

Exporting the data
------------------

The easiest way to obtain a text file of the measurement data after a completed run is to load the .eps measurement file in WinFit and export from there. 

1. Open the file in WinFit.
2. Navigate to **File => Save Fit Data As ASCII...**. 
3. A dialogue box will open from which you can choose which parameters to output. 

