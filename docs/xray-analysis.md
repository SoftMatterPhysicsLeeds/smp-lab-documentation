# X-Ray Analysis


## Introduction

## Load the data

The data format from the SAXSPoint is '.h5z', which is a compressed 'h5' file , containing the detector images. To access the data, we need to do the following:

1. unzip the '.h5z' into a temporary folder,
2. use the 'h5py' Python module to open the .h5 file as a dictionary (sort of...),
3. extract the sample names, sdd (sample-to-detector distance) values, and the detector images.

``` python

def load_hdf5_data(file_path):
    h5z_path = Path(file_path)

    # Create a temporary directory
    with tempfile.TemporaryDirectory() as temp_dir:
        temp_path = Path(temp_dir)

        # Unzip the .h5z file into the temporary directory
        with zipfile.ZipFile(h5z_path, "r") as zip_ref:
            zip_ref.extractall(temp_path)

        # Find the .h5 file inside the temp directory
        h5_files = list(temp_path.glob("*.h5"))
        if not h5_files:
            raise FileNotFoundError("No .h5 file found in the zip archive.")

        h5_path = h5_files[0]

        # Load the HDF5 file
        with h5py.File(h5_path, "r") as hdf:
            sample_name_data = hdf["entry"]["sample"]["sample_name"][:]
            sample_names = [
                (row.tobytes().decode("utf-8").strip("\x00").replace("\x00", ""))
                for row in sample_name_data
            ]
            empty_indices = [
                i for i, name in enumerate(sample_names) if "empty" in name.lower()
            ]
            empty_index = empty_indices[0] if empty_indices else None
            sdd = hdf["entry"]["data"]["sdd"][:]
            data = hdf["entry"]["data"]["data"][:]
            return sample_names, empty_index, sdd, data

```
