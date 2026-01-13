---
sidebar_label: MEV-X Homelander
title: MEV-X Homelander
---

This document provides a technical overview of the **MEV-X Homelander** system: a post-swap, atomic MEV internalization framework designed for direct integration with decentralized exchanges.

It outlines the mechanisms that enable internal backrun execution, describes the interaction between the on-chain hook and the execution layer we operate, and explains how the system captures value created by user activity without altering the trading experience.

The focus of this document is on the core components of the system, the safety measures that govern execution, and the integration principles that ensure the solution remains **non-invasive**, **deterministic**, and compatible with existing AMM architectures.

![MEV-X Homelander overview](/img/homelander-overview.jpg)
