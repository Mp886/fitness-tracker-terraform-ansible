# # Fitness Tracker Web App Deployment with Ansible and Terraform

This project demonstrates the deployment of a simple fitness tracker web app to multiple EC2 instances using Ansible for configuration management and Terraform for infrastructure provisioning.

## Project Description

The goal of this project is to automate the deployment of a fitness tracker web application from a control node to two managed nodes (EC2 instances). The project utilizes Terraform to create the necessary EC2 instances and Ansible to configure and deploy the web application.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Terraform](https://www.terraform.io/downloads.html)
- [Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)
- AWS CLI configured with appropriate credentials
- Access to an AWS account

## Project Structure

├── app
│ ├── files
│ │ ├── index.html
│ │ ├── styles.css
│ │ └── script.js
│ ├── tasks
│ │ └── main.yaml
│ └── meta
│ └── main.yaml
├── inventory.ini
├── playbook.yaml
└── terraform
├── main.tf

## Setup

### Step 1: Provision EC2 Instances with Terraform

1. Navigate to the `terraform` directory:
   ```sh
   cd terraform

2. Initialize Terraform
  
   terraform init

3. Apply the Terraform configuration to create the EC2 instances:

   terraform apply

## Step 2: Configure and deploy with Ansible

1. Navigate back to the root directory:

   cd ..

2. Update the inventory.ini file with the public IP addresses of the EC2 instances created by Terraform:


   <EC2_INSTANCE_1_PUBLIC_IP>
   <EC2_INSTANCE_2_PUBLIC_IP>

3. Run the Ansible playbook to deploy the web application:

   ansible-playbook -i inventory.ini playbook.yaml

   ## Access The Web App

   Once the playbook execution is complete, you can access the fitness tracker web app by entering the public IP addresses of the EC2 instances in your web browser.

   http://<EC2_INSTANCE_1_PUBLIC_IP>
   http://<EC2_INSTANCE_2_PUBLIC_IP>

   ## Conclusion
  This project showcases the automation of web application deployment using Ansible and Terraform. By following the steps outlined above, you can replicate this setup and adapt it for other web applications.




