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

The NLfit() window will complain that you haven't selected any data, which, to be fair, we haven't. In order to select the data, click 'Data Selection' on the left hand side, press the 'plus' button next to 'Input Data' and click the arrow on the right hand side on the 'Range 1' line. Select the logged $\tau_{\alpha}$ data. If all goes well in this step there should be a graph on the bottom left with the data and a red fit line, which is just the VFT equation using the initial parameters. After this, click 'Fit' (optional: cross fingers).

<figure markdown>
![select data](static/least-squares/Origin%20Images/select_data-1.png)
</figure markdown>

A popup will ask whether you want to 'see the report'. Click 'Yes' and something that looks like this, with the optimised parameters, their errors and a nice graph with a line through the points (hopefully): 

<figure markdown>
![origin fit report](static/least-squares/Origin%20Images/report-1.png)
</figure markdown>

The $\alpha$ relaxation timescales fitted with the VFT equation are usually plotted in an 'Arrhenius manner' i.e. against $1000/T$. Luckily, the 'fit line' data is available by clicking the tab at the bottom of the 'Book' window and will be called something like 'FitNLCurve1'. You can then replot this data with your $\tau_\alpha$ data against $1000/T$ instead.

## Matlab

Here I will describe a simple fit in **Matlab** using `lsqcurvefit` from the Curve Fitting Toolbox. One alternative to this would be to use `fminsearch` to minimise $\sum{\chi^{2}}$.

### Data Manipulation

Firstly, let's put the $T$ and $\tau_\alpha$ data into vectors:

``` Matlab

    T = [232;230;228;226;224;222;220;218;216;214;212;210;208;206;204;202;200];
    tau_alpha = [3.08000000000000e-06;5.23000000000000e-06;9.34000000000000e-06;...
    1.76000000000000e-05;3.38000000000000e-05;6.70000000000000e-05;0.000141862000000000;...
    0.000313956000000000;0.000740746000000000;0.00186504500000000;...
    0.00518699100000000;0.0156017730000000;0.0495420140000000;0.175158932000000;...
    0.658969937000000;2.58630208200000;10.7767433300000];
```

### Define a fit function

There are a couple of different ways to define a function in **Matlab**: either in-line in the script you are using or as a separate file.

#### In-Line

To define a function 'in-line' in **Matlab** one can use an anonymous functions: 

``` matlab 

    vft_function = @(p,T) p(1)+((log10(exp(1)).*p(2).*p(3))./(T-p(3)));
```

Here, the input parameter 'p' is a vector containing the fit parameters (p(1) = $\mathrm{log}_{10}(\tau_{0})$, p(2) = $D$ and p(3) = $T_0$). Note the '.' before the multiplication and division symbols; these are used because `T` is a vector and not just a single value.

#### Separate File

One can also define `vft_function` in a separate file. This function will return a set of $\tau_\alpha$ values for a given set of $T$ values and the fit parameters. The convention in **Matlab** is to name the function file after the function name i.e. `vft_function.m`.


``` matlab

    function tau_alpha = vft_function(T,p)
        tau_alpha = p(1)+((log10(exp(1)).*p(2).*p(3))./(T-p(3)));
    end
```

### Fit the Data

You can call the `lsqcurvefit` fitting routine (from the Curve Fitting Toolbox) in the following manner: 

``` matlab 

    pguess = [-12,10,150];
    fit_params = lsqcurvefit(vft_function,pguess,T,log10(tau));
```
The parameters given to `lsqcurvefit` are as follows: 1) the function (you will need an `@` symbol before the function name if you're calling it from an external .m file), 2) the initial guesses of the fit parameters (as a vector, in our case `pguess`), 3) x data to fit to (in this case $T$), 4) y data to fit to (in this case $\mathrm{log}_{10}(\tau_\alpha)$), 

The output, `fit_params`, will be a vector containing the optimised parameters. We can now generate a `tau_alpha_fitted` vector based on these optimised parameters and plot both the experimental data and the fit to check that it has worked: 

``` matlab

    tau_alpha_fitted = vft_function(fit_params,T);
    
    figure(1)
    hold off
    plot(T,log10(tau_alpha),'ro')
    hold on
    plot(T,tau_alpha_fitted,'k-')

```

<figure markdown>
![vft fit in matlab](static/least-squares/Matlab%20Images/VFT_fit_Matlab.svg)
</figure markdown>

## Python

Here I will describe fitting data using the 'Curve Fit' module in the Scipy.Optimize package. Another useful alternative is the ['LMFit'](https://lmfit.github.io/lmfit-py/) package.

### Import modules

First we need to import all the modules we will need. We will be using: 1) `scipy.optimize.curve_fit` to do the fitting, 2) `matplotlib.pyplot` to plot our results, and 3) `numpy` do to some maths.

``` python

    from scipy.optimize import curve_fit
    import matplotlib.pyplot as plt
    import numpy as np
```
### Data Manipulation

Put our data into a couple of numpy arrays:

``` python 

    T = np.array([232,230,228,226,224,222,220,218,216,214,212,210,208,206,204,202,200])
    
    tau_alpha =np.array([3.08000000000000e-06,5.23000000000000e-06,9.34000000000000e-06,
    1.76000000000000e-05,3.38000000000000e-05,6.70000000000000e-05,
    0.000141862000000000,0.000313956000000000,0.000740746000000000,
    0.00186504500000000,0.00518699100000000,0.0156017730000000,
    0.0495420140000000,0.175158932000000,0.658969937000000,
    2.58630208200000,10.7767433300000])
```
### Define fit function

Define the VFT function: 

``` python

    def VFT_function(T,log10_tau_0,D,T_0):
        return log10_tau_0+((np.log10(np.exp(1))*D*T_0))/(T-T_0)
```

### Fit the data

``` python

    pguess = [-12,10,150]
    fit_params,covariance_matrix = curve_fit(VFT_function,T,np.log10(tau_alpha),pguess)
```

The parameters given to curve\_fit are as follows: 1) the function, 2) x data ($T$), 3) y data ($\mathrm{log}_{10}(\tau_\alpha)$), 4) initial guesses for parameters. curve\_fit returns 1) 'fit\_params' which contains the optimised parameters and 'covariance\_matrix' which contains the (ahem...) covariance matrix.

We can now generate a fitted set of $\tau_\alpha$ data based on the optimised parameters and plot both the experimental data and the fit to check that the fitting has worked.

``` python 
    tau_alpha_fitted = VFT_function(T,*fit_params)

    fig,ax = plt.subplots()
    ax.plot(T,np.log10(tau_alpha),'ro')
    ax.plot(T,tau_alpha_fitted,'k-')

    plt.show()
```

<figure markdown>
![fit in python](static/least-squares/Python%20Images/fit_python.png)
</figure markdown>

## Julia

### Load modules

``` julia
    using LsqFit,PyPlot

```

### Data Manipulation

Now we can add our experimental data into a couple of vectors:

``` julia 
    T = [232,230,228,226,224,222,220,218,216,214,212,210,208,206,204,202,200];
    tau_alpha =[3.08000000000000e-06,5.23000000000000e-06,9.34000000000000e-06,
    1.76000000000000e-05,3.38000000000000e-05,6.70000000000000e-05,
    0.000141862000000000,0.000313956000000000,0.000740746000000000,
    0.00186504500000000,0.00518699100000000,0.0156017730000000,
    0.0495420140000000,0.175158932000000,0.658969937000000,
    2.58630208200000,10.7767433300000];

```

### {Define fit function}

Julia allows for extremely simple function declarations in-line: 

``` julia
    
    vft(T,p) = p[1].+ (log10(exp(1)).*p[2].*p[3]./(T.-p[3]))

```

Note the '.' in front of all operators in the function so that we can input a vector for $T$. 

\subsection{Fit the data}

We will use the `curve_fit` function in the `LsqFit` module.

``` julia

    pguess = [-12., 10., 150.]
    fit = curve_fit(vft,T,log10.(tau_alpha),pguess)

```

The parameters given to the 'curve\_fit' are 1) the function, 2) x data ($T$), 3) y data ($\mathrm{log}_{10}(\tau_\alpha))$) and 4) the initial guesses for the fit parameters. The function returns a structure which we've sent to the variable 'fit'; the fit parameters can be access from 'fit.param'. Note that the 'pguess' parameters must have a decimal place after to ensure that Julia treats them as floats. 

Finally, we can generate some fitted $\tau_\alpha$ data and plot the result. 

``` julia
    fitted_tau_alpha = vft(T,fit.param)

    fig, ax = subplots()
    ax.plot(T,log10.(tau_alpha),"ro")
    ax.plot(T,fitted_tau_alpha,"k-")

    display(gcf())
```
<figure markdown>
![fit in julia](static/least-squares/Julia%20Images/julia_fit.png)
</figure markdown>
