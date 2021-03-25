locals {
  env = "development"
}

provider "google" {
  project = var.project
  region  = var.region
}

module "function" {
  name        = "managerdatabasehandler"
  source      = "../../modules/function"
  project     = var.project
  source_dir  = "./src/functions/manager/database"
  entry_point = "app"
  environment_variables = {
    "DATABASE_URL" = "postgresql://"
  }
}
