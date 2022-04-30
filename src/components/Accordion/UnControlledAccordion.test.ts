import {reducer, StateType} from "./UnControlledAccordion.stories";
import {TOGGLE_COLLAPSED} from "../../App";

test('test reducer collapsed toBe true', () => {

    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true)

})

test('test reducer collapsed toBe false', () => {

    const state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(false)

})

test('test reducer collapsed error', () => {

    const state: StateType = {
        collapsed: false
    }

    expect(() => {
        reducer(state, {type: 'FAKE-TYPE'})
    }).toThrowError();

})