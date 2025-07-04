#include <bits/stdc++.h>
using namespace std;

void solve() {
    int n, j, k;
    cin >> n >> j >> k;
    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    int strength_j = a[j - 1];
    if(k==1){
        int max_strength = *max_element(a.begin(), a.end());
        if(max_strength!=strength_j)cout<<"NO\n";
        else cout<<"YES\n";
    }
    else cout<<"YES\n";
      
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int t;
    cin >> t;
    while (t--) {
        solve();
    }
    return 0;
}
