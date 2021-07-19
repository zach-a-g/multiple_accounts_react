import { createStore } from 'redux';

console.log('Starting banking app for multiple accounts.');
console.log('This is the second console message');

const defaultState = {
	checking: 100,
	savings: 100
};

const ACTION_DEPOSIT = 'deposit';
const ACTION_WITHDRAWAL = 'withdrawal';

function createDeposit(account, amount) {
	return {
		type: ACTION_DEPOSIT,
		payload: {
			account,
			amount
		}
	};
}

function createWithdrawal(account, amount) {
	return {
		type: ACTION_WITHDRAWAL,
		payload: {
			account,
			amount
		}
	};
}

function accounts(state=defaultState, action) {
	switch(action.type) {
	case ACTION_DEPOSIT:
		return {
			...state,
			[action.payload.account]: state[action.payload.account] + action.payload.amount
		};
	case ACTION_WITHDRAWAL:
		return {
			...state,
			[action.payload.account]: state[action.payload.account] - action.payload.amount
		};	}
	return state;
}

const store = createStore(accounts);
store.subscribe(() => {
	console.log('=== state has updated ===');
	const state = store.getState();
	console.log(state);
});

window.store = store;
window.createDeposit = createDeposit;
window.createWithdrawal = createWithdrawal;