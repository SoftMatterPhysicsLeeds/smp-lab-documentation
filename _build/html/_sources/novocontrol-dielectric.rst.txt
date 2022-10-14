Novocontrol Broadband Dielectric Spectrometer
=============================================

Setting up a measurement in software
------------------------------------

1. Start **WinDeta** (if it isn't already) and navigate to **Temp. Controller**. 
2. Select **Initialize from Controller**. If this has worked correctly then you should see the temperature of the sample, gas stream and Dewar in the **Status** window. 

.. note::
    You can choose whatever window placement you like within **WinDeta** but I've found that the most efficient is to tile the **Status**, **Message**, **Temperature Log** and **Online** windows together.
 

3. Navigate to **File => Set File Names** (important to change the name of the output file immediately so that you do not overrite someone else's measurement. )
4. Navigate to **Measurement => Sample Specification** and enter the required information. The **Description** box should contain information about your zsample (this information will appear at the top of any data you produce). The **Sample diameter** and **Sample thickness** (in mm) should also be entered - figure 4 shows how these values should be defined. For standard measurements (i.e. sample between two round electrodes), the **Cell Stray** should be set to **1** and **Spacer Area** can be set to 0. The checkbox for **Use Dielectric Sample Cell** should be checked.
