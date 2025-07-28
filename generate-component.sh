#!/bin/bash

# React Component Generator - Convenience Script
# Usage: ./generate-component.sh ComponentName

if [ $# -eq 0 ]; then
    echo "❌ Error: Component name is required"
    echo "Usage: ./generate-component.sh ComponentName"
    exit 1
fi

COMPONENT_NAME=$1
PROJECT_ROOT=$(pwd)

echo "🚀 Generating React component: $COMPONENT_NAME"
echo "📁 Project root: $PROJECT_ROOT"

cd cli && ./bin/generate-component.js "$COMPONENT_NAME" --output "$PROJECT_ROOT"
