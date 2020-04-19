# **CoronaVirus State Info**

### **Purpose**
<ul>
    <li>
        Aggregate Johns Hopkins CoronaVirus case data that is available by county to provide information <br />
        on CoronaVirus cases for the given State as a whole.
    </li>
    <li>
        Provide a means of calculating infection rate within any given state.
    </li>
</ul>

<hr />

### **API**

`getHistoricalData(state: string, daysBack: number): State` <br />
This endpoint returns the cumulative number of CoronaVirus cases and deaths for each day in the range of <br /> 
`daysBack` to the time of calling the API. `daysBack` defaults to 30 if no value is received.

`getInfectionRate(state: string, daysBack: number): number` <br />
This endpoint returns the infections rate (infection/day) as a number, considering the range of time from <br />
`daysBack` to the time of callign the API. `daysBack` defaults to 5 if no value is received.

<hr />

### **Models**

```
State {
    name: string,
    days: day[]
}

Day {
    date: string,
    cases: number,
    deaths: number
}
```
