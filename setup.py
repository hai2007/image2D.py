#!/usr/bin/python3

from setuptools import setup

setup(
    name='image2d',
    version='0.1.0',
    description='对python内置GUI模块tkinter中的canvas进行的友好封装',
    author='hai2007',
    author_email='2501482523@qq.com',
    packages=['image2d'],
    url='https://github.com/hai2007/image2D.py',
    license='MIT',
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent"
    ],
     install_requires=[
        'basic-toolkit>=0.4.2'
    ]
)
