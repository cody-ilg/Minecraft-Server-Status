export interface FerryData {
    status:   string;
    response: Response[];
}

export interface Response {
    mmsi:      number;
    callsign:  string;
    eta:       string;
    lat:       number;
    lng:       number;
    operator:  Operator;
    timestamp: Date;
    vessel:    string;
}

export enum Operator {
    BelaireFerries = "Belaire Ferries",
    ExploreGroupNZ = "Explore Group NZ",
    Fullers = "FULLERS",
    SeaLink = "Sea Link",
}
