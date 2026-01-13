---
title: Security Guarantees
---

MEV-X operates entirely within the execution boundaries defined by the AMM’s native post-swap hook, which is invoked only after the AMM has fully completed its swap logic and updated its internal state.

Because the MEV-X system operates strictly as a consumer of post-swap data and never performs privileged actions against the pool, its safety profile is bounded by the AMM’s own guarantees. If the pool’s hook framework is secure, the MEV-X integration inherits that security without introducing additional risk.

All MEV-X logic runs within the callback context and is isolated from the user’s swap flow. If the execution layer identifies no profitable opportunity, the hook’s internal operations revert without affecting the swap itself. The user always receives the expected swap output, regardless of MEV-X activity.

Off-chain components support route preparation but do not participate in atomic execution. Profitability checks, arbitrage execution, and settlement occur entirely on-chain and within the same transaction boundary. No part of the process is exposed to the public mempool.

MEV-X contracts accept post-swap callbacks only from authorized pools and enforce token and route constraints at execution time. The system does not modify the AMM’s trust model and does not introduce new entry points that could affect pool integrity.
