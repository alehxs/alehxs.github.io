#!/usr/bin/env python3
"""
Fetches the Wordnik word of the day and writes it to public/wotd.json.
Requires WORDNIK_API_KEY environment variable.
"""

import json
import os
import sys
from pathlib import Path

import requests

API_URL = "https://api.wordnik.com/v4/words.json/wordOfTheDay"


def fetch():
    api_key = os.environ.get("WORDNIK_API_KEY")
    if not api_key:
        print("ERROR: WORDNIK_API_KEY not set.")
        sys.exit(1)

    resp = requests.get(API_URL, params={"api_key": api_key}, timeout=10)
    resp.raise_for_status()
    payload = resp.json()

    word = payload.get("word", "")
    definitions = payload.get("definitions") or []
    first = definitions[0] if definitions else {}

    if not word or not first.get("text"):
        print("ERROR: Missing word or definition in API response.")
        sys.exit(1)

    data = {
        "word":       word,
        "pos":        first.get("partOfSpeech", ""),
        "definition": first["text"],
    }

    out = Path(__file__).parent.parent / "public" / "wotd.json"
    out.parent.mkdir(exist_ok=True)
    out.write_text(json.dumps(data, ensure_ascii=False, indent=2))
    print(f"Written: {data['word']}")


if __name__ == "__main__":
    fetch()
