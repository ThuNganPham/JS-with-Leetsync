function isMatch(s: string, p: string): boolean {
    const m = s.length, n = p.length;
    const dp: boolean[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));

    dp[0][0] = true;

    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2]; 
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 2]; 


                if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
                    dp[i][j] ||= dp[i - 1][j]; 
                }
            }
        }
    }

    return dp[m][n];
}
