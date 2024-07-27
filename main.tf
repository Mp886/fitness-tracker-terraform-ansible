terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
}


resource "aws_instance" "manage nodes" {
  count         = 2
  ami           = "ami-04a81a99f5ec58529"  # Ubuntu Server 20.04 LTS (HVM), SSD Volume Type
  instance_type = "t2.micro"
}
