---
title: Integration for Exchanges
---

MEV-X Internalization is integrated by directing the AMM’s post-swap callback to the MEV-X entrypoint. This is the only action required to activate the system; once connected, the callback operates automatically.

The functional components of MEV-X include on-chain execution and an off-chain optimizer that prepares a set of candidate arbitrage routes. When the pool completes a swap, its post-swap callback passes the updated data to MEV-X.

Based on this state, the system determines whether a backrun opportunity exists and, if so, performs the arbitrage and distributes the profit within the same transaction.

For the exchange, this integration introduces no additional operational burden. After the callback is linked to MEV-X, the internal MEV capture process runs autonomously and does not require ongoing intervention or changes to existing workflows.
