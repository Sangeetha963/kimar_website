#!/bin/bash

set -eu

# create aws configure
echo "awsのconfigを作成します"
mkdir -p ~/.aws

{
  echo "[default]"
  echo "aws_access_key_id=${AWS_ACCESS_KEY_ID}"
  echo "aws_secret_access_key=${AWS_SECRET_ACCESS_KEY}"
  echo "region=ap-northeast-1"
  echo "output=json"

  echo "[ns-dev]"
  echo "region=ap-northeast-1"
  echo "role_arn=arn:aws:iam::987224599915:role/ns-dev-admin"
  echo "source_profile=default"
  echo "output=json"

  echo "[ns-prod]"
  echo "region=ap-northeast-1"
  echo "role_arn=arn:aws:iam::592424671934:role/ns-prod-admin"
  echo "source_profile=default"
  echo "output=json"
} >~/.aws/credentials

{
  echo "[profile ns-dev]"
  echo "region=ap-northeast-1"
  echo "role_arn=arn:aws:iam::987224599915:role/ns-dev-admin"
  echo "source_profile=default"
  echo "output=json"

  echo "[profile ns-prod]"
  echo "region=ap-northeast-1"
  echo "role_arn=arn:aws:iam::592424671934:role/ns-prod-admin"
  echo "source_profile=default"
  echo "output=json"

} >~/.aws/config

unset AWS_ACCESS_KEY_ID
unset AWS_SECRET_ACCESS_KEY
