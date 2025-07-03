#!/bin/zsh

# -------------------------
# 🏖️ SANDBOX SCRIPT
# -------------------------

BASE="$HOME/dev/personal/sandbox"
DEST="./sandbox"

# Always wipe old sandbox first
rm -rf "sandbox"
mkdir "sandbox"

# Handle flag
case "$1" in
  --html)
    cp "$BASE/html/"* "$DEST/"
    cp -R "$BASE/images" "$DEST/"
    ;;
  --css)
    cp "$BASE/css/"* "$DEST/"
    ;;
  --js)
    cp "$BASE/js/"* "$DEST/"
    ;;
  *)
    cp "$BASE/starter/"* "$DEST/"
    ;;
esac

cd "sandbox" || exit 1

code .
open "./index.html"

echo "🏖️  Sandbox is ready!"
