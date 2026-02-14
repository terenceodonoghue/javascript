#!/bin/bash
FILE_PATH=$(jq -r '.tool_input.file_path // empty' < /dev/stdin)

if [[ "$FILE_PATH" == */package.json ]]; then
  pnpm exec sort-package-json "$FILE_PATH"
fi
