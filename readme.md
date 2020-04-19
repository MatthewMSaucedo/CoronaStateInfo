# **CoronaVirus State Info**

### **Purpose**
<ul>
    <li>
        Aggregate 
        <a href="https://corona.lmao.ninja/">
            Johns Hopkins CoronaVirus case data
        </a>
        that is available by county to provide information <br />
        on CoronaVirus cases for the given State as a whole.
    </li>
    <li>
        Provide a means of calculating infection rate within any given state.
    </li>
</ul>

<hr />

### **API**

`(GET) getHistoricalData(state: string, daysBack: number): State` <br />
This endpoint returns the cumulative number of CoronaVirus cases and deaths for each day in the range of <br /> 
`daysBack` to the time of calling the API. `daysBack` defaults to 30 if no value is received.

`(GET) getInfectionRate(state: string, daysBack: number): number` <br />
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
 <hr />

### **Run and Query Application**
To run this application, perform the following actions.
<ul>
    <li>Clone this repo</li>
    <li>Navigate to the repo folder via the command line</li>
    <li>Assuming you have Node installed (if not, go do that!): run `npm i`</li>
    <li>Run `npm run start`</li>
</ul>

This application will now be running locally. To query the endpoints, use the following urls:
<ul><li>localhost:3000/coronastateinfo/gethistoricaldata</li>
<li>localhost:3000/coronastateinfo/getinfectionrate</li></ul>

Simply perform an HTTP GET request, with the request bodies detailed in the API section of this documentation.