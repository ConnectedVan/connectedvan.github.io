# Firmware & Flashing

You can flash the Autoterm Controller directly from this browser using the ESPHome Web Tools. 

**Requirements:**
* Use Chrome or Edge (Safari/Firefox do not support the Web Serial API).
* Connect the board to your PC via USB.

### Web Flasher

<script type="module" src="https://unpkg.com/esp-web-tools@10/dist/web/install-button.js"></script>

<esp-web-install-button manifest="https://raw.githubusercontent.com/connectedvan/YOUR-FIRMWARE-REPO/main/manifest.json">
</esp-web-install-button>

---
*Note: If the button is greyed out, ensure your browser is up to date and you have the correct USB drivers installed for the ESP32.*