Stelar FFC NMR 
==============
Author: Dan Baker

Hardware Setup
--------------

1. Turn on the Galden recirculator
2. If compressed air supply isn't on already, open valve.
3. If the PC isn't on already, press orange 'Reset computer array' button
4. Press green TX button (should light up and fan should start). 

5. Sample Setup

    a. Add white 'tube holder' to sample tube and centre your sample using the block on the side of the machine. 
    b. Place sample into magnet (place into hole in the top)
    c. Place weight over tube above white holder to stop the tube floating in the compressed air. 

6. Switch on VTC 90 (temperature controller)
    a. Press RESET then 1 then ENTER (within a couple of seconds). 
    b. The display should now read "Flow = 300". Press enter (don't change the flow)
    c. Enter desired starting temperature. 

Software Setup
--------------
1. Load "ACQNMR" software (link on Desktop)
2. Navigate to Hardware => Magnet => Switch On. 
3. Right click "Not Connected" (top right) and click "Connect". You should see the front panel of the VTC unit replicated in this box. You can now change the sample temperature by right clicking this box and selecting 'Set Point'.

Measurement Setup: Correcting the frequecy offset, F1.
------------------------------------------------------
You should perform these steps every time you change sample/temperature.

1. On the ‘Main Par’ tab, select ‘EXP’ and choose ‘NP’ (we are going to use this 1 pulse sequence to set frequency and phasing).
2. Relaxation Field 7MHz.
3. File, New File Name.
4. Recycle delay to 5T1 in the ‘Main par’ tab (if you don't know T1, choose 1s). 
5. If desired, change the number of scans in the ‘Acq. Par – Basic’ tab. 1-4 is usually sufficient.
6. Delay tau to 5T1 (if you don't know T1, choose 1s). 
7. Click on the GUN to start the measurement 
8. Click the Save icon.
9. Click Correct F1 button.

Measurement Setup: Measuring R1/T1 spectrum at 7MHz.
----------------------------------------------------

1. Change experiment to "NP/S" on the Main tab. 
2. Make sure Recycle Delay is still roughly 5T1 (or 1s if you don't know)
3. Set Relaxation Field to 7 MHz (units are MHz)
4. Set Maximum T1 to what you think T1 is (if you don't know, then assume 0.2s i.e. 1s/5).
5. Click GUN - wait for measurement to finish.
6. Click SAVE
7. Click Evaluation Dialog. Choose RAM from list on right hand side. 
8. If the measured T1 is much longer (>120%) than your initial guess of T1Max then repeat this section. Similarly, if T1 is much shorter than you thought it would be (<50%) repeat this section.

Measurement Setup: Measuring R1/T1 Dispersion Profile
-----------------------------------------------------

1. Navigate to Actions => Profile Wizard. 
2. Click Synchronise Parameters at the bottom of the wizard to copy over the parameters that we set up previously. 
3. Change the run parameters (frequency range, number of points, number of repetitions per point etc) on the right hand side of the wizard.
4. Set filename via Export File => Change. 

.. note::
    The total run-time for an experiment will be (approximately) = Profile Points x Repetition Points x Tau Blocks x Delay Time. 

5. Click execute in the wizard to start the run. 
6. The software will execute the first experiment (at the first frequency) and tell you whether it recommends you continue or not. If you have gone through the setup steps correctly this should work... 
7. When the experiment has finished a table of data with the Frequency, T1, R1 etc will be output as a .sef file. 

Shut Down
---------
1. Turn off heater.
2. Turn off Magenet from software
3. Turn off TX. 
4. Turn off Galden recirculator. 
5. Turn off air. 


