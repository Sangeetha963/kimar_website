#!/bin/bash
set -eu

case ${CI_COMMIT_BRANCH:-"develop"} in
"master")
  export STAGE=prod
  export AWS_DEFAULT_PROFILE=ns-prod
  export AWS_PROFILE=ns-prod
  ;;
*)
  export STAGE=dev
  export AWS_DEFAULT_PROFILE=ns-dev
  export AWS_PROFILE=ns-dev
  ;;
esac

echo "--------------------"
echo "target branch: ${CI_COMMIT_BRANCH}"
echo "target stage: ${STAGE}"
echo "--------------------"

set +eu
