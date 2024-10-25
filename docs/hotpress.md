Hot Presses
===========

Author: Dan Baker

<style>
        .calculator {
            max-width: 400px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background: #f9f9f9;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .form-group input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .result {
            margin-top: 15px;
            padding: 10px;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        button {
            background: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background: #0056b3;
        }
    </style>

## Pressure calculator

<div class="calculator">
    <div class="form-group">
        <label for="pressure">Required Sample Pressure (MPa):</label>
        <input type="number" id="pressure" step="0.01" placeholder="Enter required sample pressure (MPa)">
    </div>
    <div class="form-group">
        <label for="area">Sample Area (cm<sup>2</sup>):</label>
        <input type="number" id="area" step="0.01" placeholder="Enter sample area (cm^2)">
    </div>
    <button onclick="convertPressure()">Calculate</button>
    <div class="result" id="result"></div>
</div>

<script src="../javascripts/pressure_calculator.js"></script>