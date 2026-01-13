---
title: The Scale of MEV Leakage
---

Our internal on-chain analysis of major EVM networks shows that total extractable MEV in the observed dataset amounts to approximately **$1.6B per year**, with around **$200M** attributable specifically to atomic arbitrage opportunities created directly by user swaps. These values reflect the scale of surplus that forms inside AMM pools and the size of the market that has developed around capturing it.

Under the current execution flow, this surplus is not retained by the exchanges or liquidity providers whose activity generates it. The economic upside produced inside the pool exits the platform entirely, accruing to the actors who include the arbitrage transaction in the block rather than to the environment that created the opportunity.

This dynamic creates a persistent form of revenue leakage: user activity generates internal value, but the realization of that value occurs outside the platform’s economic boundary. The scale of the MEV market illustrates the significance of this inefficiency and highlights the potential impact of retaining even a fraction of this surplus within the system.

This is the gap that internalization addresses. By resolving the opportunity within the same transaction that creates it, internalization eliminates the separation between the point at which value is generated and the point at which it is realized. As a result, value originating from user trades can be directed toward specific objectives, including liquidity reinforcement, user-aligned incentives, or the creation of additional revenue channels.
