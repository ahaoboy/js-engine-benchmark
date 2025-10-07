#!/usr/bin/env bash

if [ $# -ne 1 ]; then
  echo "Usage: $0 info.json"
  exit 1
fi

json_file="$1"

if ! command -v jq >/dev/null 2>&1; then
  echo "Error: jq is required but not installed."
  exit 1
fi

is_windows=false
case "$(uname -s)" in
  *MINGW*|*MSYS*|*CYGWIN*) is_windows=true ;;
esac

skip_list=("goja" jint-cli)

jq -c '.[]' "$json_file" | while IFS= read -r item; do
  name=$(echo "$item" | jq -r '.bin // .name')

  if [[ " ${skip_list[*]} " =~ " ${name} " ]]; then
    continue
  fi

  exe_name="$name"
  if [ "$is_windows" = true ]; then
    exe_name="${name}.exe"
  fi

  exe_path=$(command -v "$exe_name" 2>/dev/null || true)
  if [ -z "$exe_path" ]; then
    echo "⚠️  Skipping: $exe_name not found"
    continue
  fi

  echo "🔍 Found: $exe_path"

  if strip "$exe_path" 2>/dev/null; then
    echo "✅ Stripped: $exe_path"
  else
    echo "❌ Failed to strip: $exe_path"
  fi
done
