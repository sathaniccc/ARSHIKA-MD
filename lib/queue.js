const queues = new Map(); // jid -> { items: [], running: false }

export function pushToQueue(jid, task) {
  if (!queues.has(jid)) queues.set(jid, { items: [], running: false });
  const q = queues.get(jid);
  q.items.push(task);
  if (!q.running) processQueue(jid);
}

async function processQueue(jid) {
  const q = queues.get(jid);
  if (!q) return;
  q.running = true;
  while (q.items.length) {
    const t = q.items.shift();
    try {
      await t();
    } catch (e) {
      console.error("[queue] task error:", e?.message || e);
    }
    await new Promise(r => setTimeout(r, 300));
  }
  q.running = false;
}
