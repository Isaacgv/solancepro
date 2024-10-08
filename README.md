# SolancePro

A decentralized platform for hiring freelancers and posting projects, powered by Solana. It leverages blockchain technology to provide fast, secure, and low-cost transactions, enabling seamless payments, project management, and reputation tracking. With smart contract-based escrow, decentralized governance, and cross-border capabilities, the platform ensures a trustless and efficient marketplace for freelancers and clients worldwide.

Click on the image to learn how to log in:

[![Watch the video](https://img.youtube.com/vi/umnZ7k5eLTg/0.jpg)](https://www.youtube.com/watch?v=umnZ7k5eLTg)


Try the app with Solana Wallet Devnet: https://solance.netlify.app


# React Web Application

This project is a React web application. Follow the instructions below to set up, install, and run the application on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- **Node.js** (v14.x or higher) and **npm** (v6.x or higher)
o it will be installed automatically.

## Folder project 
    ```
    cd solana-front
    ```

## Add program ID
    ```
    cd solana-front/src/anchor
    ```
    
Inside file: setup.ts
Add the program ID inside -> 

    ```
    export const programId = new PublicKey(
      ''
    )
    ```
    
## Install dependencies
    ```
    npm install
    ```

## Running the Application
    ```
    npm run 
    ```
    
# Banckend

## Install tools
Install Anchor

## Folder project
    ```
    cd solana-plataform
    ```

## Install dependencies
    ```
    npm install --global yarn
    ```
    
## Add program ID
    ```
    cd solana-plataform/programs/constant/src/
    ```
    
Inside file: libs.rs
Add the program ID inside -> 

    ```
    declare_id!(""); 
    ```

## Run client
    ```
    anchor run client
    ```
