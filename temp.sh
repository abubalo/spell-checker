#!/bin/bash

# Function to create .gitkeep files
create_gitkeep() {
  local dir="$1"
  touch "$dir/.gitkeep"
  echo "Created .gitkeep in $dir"
}

echo "Creating .gitkeep files in empty directories within the current directory"

# Find empty directories and create .gitkeep files
find . -type d -empty | while read -r dir; do
  create_gitkeep "$dir"
done

echo "Done"
