# Least Squares Fitting
Author: Dan Baker

## Introduction

This document will show you how to fit some experimental data with a non-linear function. You can then use these examples to fit your own data by changing the data/function. 

The example data are structural relaxation timescales, $\tau_\alpha$,  as a function of temperature. These data can be well described using the Vogel-Fulcher-Tammann (VFT) equation: 

\begin{equation}
    \tau_\alpha = \tau_{0}e^{\frac{DT_{0}}{T-T_{0}}}
    \label{eq:VFT}
\end{equation}

where $\tau_0$ is a typical timescale for molecular motion at high temperature (usually $10^{-14} - 10^{-12}$s), $D$ is the 'strength' parameter (analogous to the inverse of fragility), and $T_0$ is an 'ideal' glass transition temperature. To prevent the fit routine being biased towards larger values of $\tau_\alpha$ (as the functional form is exponential) it is often better to fit the logarithm of this equation to the logarithm of the data. In base 10 (for fun): 

\begin{equation}
    \mathrm{log}_{10}\left(\tau_\alpha\right) = \mathrm{log}_{10}\left(\tau_{0}\right) + \frac{\mathrm{log}_{10}\left(e^{1}\right)DT_{0}}{T-T_{0}}
    \label{eq:VFT_logged}
\end{equation}


## Excel

### Open the data

Load the data (copy/paste, open .txt file, whatever) into **Excel**:

<figure markdown>
![Excel load data](static/least-squares/Excel%20Images/load_data_excel.PNG)
</figure markdown>

### Generate 'fit' line

Generate data based on the function that you want to fit. In this case, I have generated data based on equation \ref{eq:VFT_logged}, using column B as input for T (so that the generated fit values are of the same length as the experimental $\tau_\alpha$ data) and the cells K3, K4 and K5 as the parameters $\mathrm{log}_{10}(\tau_0)$, $D$ and $T_0$.

<figure markdown>
![generate fit line excel](static/least-squares/Excel%20Images/generate_fit_line_excel.PNG)
</figure markdown>

### Calculate $\chi^{2}$

Find the difference between the experimental data and the generated fit line, squared ($\chi^2$) and then sum this column. We will do our least squares minimisation on this sum through variation of the fit parameters $\mathrm{log}_{10}(\tau_0)$, $D$ and $T_0$. At this point it's a good idea to plot the experimental data and the fit line so that we have a graphical representation of whether the fit routine gives us a good solution:

<figure markdown>
![chi squared graph excel](static/least-squares/Excel%20Images/chisqaured_graph_excel.PNG)
</figure markdown>

### Load the 'Solver'

Load the **Excel** Solver Add-in by clicking on the Data tab and selecting solver (should be on the very right hand side of the ribbon. If you can't see the `Solver' button then you need to enable it by following these [instructions](https://support.microsoft.com/en-us/office/load-the-solver-add-in-in-excel-612926fc-d53b-46b4-872c-e24772f078ca)). 

<figure markdown>
![excel solver](static/least-squares/Excel%20Images/excel_solver.PNG)
</figure markdown>

- 'Set Objective' should be the cell containing the sum of the $\chi^2$ column
- 'To' should be 'Min' (we want to minimise the sum of $\chi^2$ because $\chi^2$ is the difference between our experimental data and our fit line and so the smaller this difference, the better the fit). 
- 'By Changing Variable Cells' should be set to our fit parameters (these will be changed in order to minimise the sum of $\chi^2$).
- 'Make Unconstrained Variables Non-Negative' should be unticked in this case (since $\mathrm{log}_{10}(\tau_0)$ will probably be negative).
- Click 'Solve'

After the solver has finished, the 'Solver Results' window should appear. In the ideal case, the fit line should now go through the points and the fit parameter cells should contain the updated fit parameters. If you're happy this is the case, make sure 'Keep Solver Solution' is selected and click `OK' to keep the parameters.

<figure markdown>
![excel solver complete](static/least-squares/Excel%20Images/solver_complete_excel.PNG)
</figure markdown>

## Origin

### Data Manipulation

First of all, load the data into **Origin**. At this stage we just need the $T$ values and the $\tau_\alpha$ data as they come out:

<figure markdown> 
![origin load data](static/least-squares/Origin%20Images/Loaddata-1.png)
</figure markdown>

Then, calculate the logarithm of the $\tau_\alpha$ values in a separate column:

<figure markdown>
![origin log data](static/least-squares/Origin%20Images/log_data-1.png)
</figure markdown>

A plot of $\mathrm{log}_{10}(\tau_\alpha)$ vs $T$ will look like:

<figure markdown>
![origin plot initial](static/least-squares/Origin%20Images/plot_initial-1.png)
</figure markdown>

### Defining a new fit function

The data are clearly non-linear and so we'd like to fit them using a non-linear curve fitting routine. Click on 'Analysis' $\rightarrow$ 'Fitting' $\rightarrow$ 'Nonlinear Curve Fit':

<figure markdown>
![origin analysis fit menu](static/least-squares/Origin%20Images/Analysis_fit_menu-1.png)
</figure markdown>

On the window that pops up ('NLfit()') click on the 'Category' dropdown and select 'New...'

<figure markdown>
![origin NL fit menu](static/least-squares/Origin%20Images/NLfitmenu-1.png)
</figure markdown>

A popup window will ask you to name your new category of functions, so give it a name. Next, click on the dropdown next to 'function' and select `new' again...

<figure markdown>
![origin new function](static/least-squares/Origin%20Images/new_function-1.png)
</figure markdown>

Name the function something and then click `Next'...

<figure markdown>
![origin new function name](static/least-squares/Origin%20Images/new_function_name-1.png)
</figure markdown>

On the next screen you can set up the parameters. Here, $T$ is the independent variable, $\tau$ is the dependent variable and the equation has 3 free parameters, $\tau_0$, $D$ and $T_0$, which will be varied in the fitting routine. You can call these what you want, of course! It's worth mentioning again at this point that the values of $\tau$ and $\tau_0$ will be the 'logged' values but more on that in a sec... After all looks good, click 'Next'.

<figure markdown>
![orign param names](static/least-squares/Origin%20Images/function_parameter_names-1.png)
</figure markdown>

In the next window, the first thing to set is the inital values for the varying parameters. By default, these are set to '1': if you try and fit without setting 'sensible' values here then the fit will not converge. A sensible region for $\tau_0$ is somewhere in the region of $10^{-12}$ to $10^{-14}$ and so, as we're dealing with the 'logged' value I have set the initial value of $\tau_0$ to -12. The $D$ parameter, also known as the 'strength' parameter, basically sets the rate at which the VFT equation tends to infinity and the temperature $T_0$ is the temperature at which this occurs. Setting $D$ to some integer value between 2 and 10 and $T_0$ to a `sensible' temperature is usually good enough. Here, I've set $D$ to 5 and $T_0$ to 100K (remember to work in Kelvin).

Once these initial parameter values have been set, you can enter the equation in the textbox below. Note that, because I've chosen to work in base 10 logarithm, I have to include a $\mathrm{log}_{10}(e^{1})$ term... Click on the 'quick check' button and make sure that it spits a result out. If all looks good, click `Next'.

<figure markdown>
![origin equation def](static/least-squares/Origin%20Images/equation_def-1.png)
</figure markdown>

Just click `Next' through the next screen...

<figure markdown>
![origin init](static/least-squares/Origin%20Images/init-1.png)
</figure markdown>

On the next screen you can set upper and lower bounds for the parameters. This isn't usually necessary for the VFT equation to work (if the initial parameter guesses aren't insane) so I've left these blank in this example... There are two more screens after this one that are not required for this exercise so now just click 'Finish' to get back to the NLFit() window.

<figure markdown>
![origin bounds](static/least-squares/Origin%20Images/bounds-1.png)
</figure markdown>

### Fit the data