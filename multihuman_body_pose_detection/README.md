This folder contains a "proof-of-concept" (POC) for a multi-human body pose estimation in 3D.

The POC is based on:
 - pyTorch : an open source machine learning (ML) framework based on the Python programming language and the Torch library
 - torchvision:  a library consists of popular datasets, model architectures, and image transformations for computer vision
 - MMPose (see https://github.com/open-mmlab/mmpose): an open-source toolbox for pose estimation based on PyTorch
 - MMCV (is a foundational python library for computer vision research)

The setup has been tested on a MacOS M1 machine, with these library versions:
 - torch==2.4.1
 - torchvision==0.19.1
 - mmcv==2.1.0 

The suggested way of executing the POC is:

1) Create a virtual environment and active it:
 - python3 -m venv
 - source ./env/bin/activate

2) Install required libraries:
 - pip install torch==2.4.1 torchvision==0.19.1 mmcv==2.1.0 openmim

3) Install mmengine:
 - mim install mmengine

4) Follow steps recommended in https://mmpose.readthedocs.io/en/latest/installation.html, to install 'mmpose' from source


The 'scripts' folder includes:

a) show_in_webcam.sh --> a script to show how body pose detection works in the laptops webcam
b) process_videos.sh --> a script to process a video (located in /videos) to detect multi-body pose


