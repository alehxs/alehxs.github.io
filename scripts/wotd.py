#!/usr/bin/env python3
"""
Scrapes the OED (oed.com) word of the day from the homepage
and writes it to public/wotd.json
"""

import json
import sys
from pathlib import Path

import requests
from bs4 import BeautifulSoup

URL = "https://www.oed.com"
HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    )
}

def scrape():
    resp = requests.get(URL, headers=HEADERS, timeout=10)
    resp.raise_for_status()
    soup = BeautifulSoup(resp.text, "html.parser")

    wotd = soup.select_one(".wotd")
    if not wotd:
        print("ERROR: .wotd section not found.")
        sys.exit(1)

    word = wotd.select_one("h3 a") or wotd.select_one("h3")
    pos  = wotd.select_one(".wotdPos")
    defn = wotd.select_one(".wotdDef")

    if not word or not defn:
        print("ERROR: Could not parse word or definition.")
        sys.exit(1)

    data = {
        "word":       word.get_text(strip=True),
        "pos":        pos.get_text(strip=True) if pos else "",
        "definition": defn.get_text(strip=True),
    }

    out = Path(__file__).parent.parent / "public" / "wotd.json"
    out.parent.mkdir(exist_ok=True)
    out.write_text(json.dumps(data, ensure_ascii=False, indent=2))
    print(f"Written: {data['word']}")

if __name__ == "__main__":
    scrape()
