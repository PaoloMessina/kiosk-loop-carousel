#!/bin/bash

timeout 5 chromium-browser --disable-web-security --kiosk http://localhost:9000 --incognito --noerrdialog --test-type