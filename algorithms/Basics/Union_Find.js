class Disjoint {
	initialize(Arr, N) {
		for (i = 0; i < N; i++) Arr[i] = i;
	}
	//returns true if A and B are connected, else returns false
	find(Arr, A, B) {
		if (Arr[A] == Arr[B]) return true;
		else return false;
	}
	//change all entries from arr[ A ] to arr[ B ].
	union(Arr, N, A, B) {
		let TEMP = Arr[A];
		for (i = 0; i < N; i++) {
			if (Arr[i] == TEMP) Arr[i] = Arr[B];
		}
	}
}
