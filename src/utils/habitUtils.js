export const calculateStreak = (history) => {
  if (!history || history.length === 0) return 0;

  const sorted = history
    .map(date => new Date(date))
    .sort((a, b) => b - a);

  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];

  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split("T")[0];

  const mostRecent = sorted[0].toISOString().split("T")[0];

  // If last completion was not today or yesterday, streak is 0
  if (mostRecent !== todayStr && mostRecent !== yesterdayStr) return 0;

  let streak = 1;

  for (let i = 0; i < sorted.length - 1; i++) {
    const diff =
      (sorted[i] - sorted[i + 1]) / (1000 * 60 * 60 * 24);

    if (diff === 1) streak++;
    else break;
  }
  return streak;
};

export const calculateProgress = (history) => {
  const today = new Date();
  const last30 = new Date();
  last30.setDate(today.getDate() - 30);

  const completedLast30 = history.filter(d => {
    const date = new Date(d);
    return date >= last30 && date <= today;
  }).length;

  return Math.round((completedLast30 / 30) * 100);
};

