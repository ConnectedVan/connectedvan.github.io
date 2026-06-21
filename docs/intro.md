---
sidebar_position: 1
slug: /
---

# The ConnectedVan Ecosystem

Welcome to ConnectedVan. Our mission is simple: **bring the power of the modern Smart Home into your RV, Campervan, or Boat.**

## The Problem
If you have built a campervan recently, you know the frustration. You buy a premium solar system from Victron, a diesel heater from Autoterm, and a water tank monitor from another brand. 

The result? You end up with three different proprietary control panels on your wall and three different apps on your phone that refuse to talk to each other. 

## The ConnectedVan Solution
ConnectedVan provides an open-source hardware and software ecosystem designed to break down these silos. By utilizing custom-designed **ESP32-C6 hardware modules**, we act as the universal translator between your van's disparate hardware and **Home Assistant**.

### How It Works
The project is broken down into three main layers:

1. **Hardware Modules:** Purpose-built, galvanically isolated PCBs (like the *Autoterm Heater Module* or the *Battery Shunt Module*) that physically connect to your appliances.
2. **Firmware & Integrations:** Pre-configured ESPHome software that securely translates vehicle data into your local smart network via Wi-Fi.
3. **Dashboards:** Beautiful, unified Home Assistant interface templates and custom touchscreen controllers to manage your entire rig from one screen.

### The Roadmap
* [x] **Phase 1:** Core ESP32-C6 hardware module development.
* [ ] **Phase 2:** ESPHome firmware templates and web-flashing tools.
* [ ] **Phase 3:** Centralized touchscreen hardware controller.
* [ ] **Phase 4:** Open-source Lovelace dashboard templates for Home Assistant.

Whether you are building a weekend warrior or a full-time expedition vehicle, ConnectedVan puts you in absolute control of your data and your hardware.