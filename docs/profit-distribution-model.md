---
title: Profit Distribution Model
---

Our internalization system includes a configurable distribution model that determines how surplus value is handled after a profitable backrun. Once the net surplus is computed, the settlement logic applies the distribution settings defined during integration.

These settings specify the recipients and allocation ratios, and can be adjusted to reflect the exchange’s economic framework or operational priorities.

MEV-X retains a predefined share for operating the execution pipeline, while the remaining portion is settled according to the exchange’s configuration. All distributions occur on-chain and complete atomically within the same transaction as the originating swap.

This design provides the exchange with full control over how recovered MEV is directed, while maintaining deterministic and fully automated settlement behavior.
