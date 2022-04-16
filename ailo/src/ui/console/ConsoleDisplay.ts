import * as rl from 'readline-sync';
import { exit } from 'process';
import LogDisplay from './LogDisplay';

export default function ConsoleDisplay(): string {
    LogDisplay("Initiate Zombie world [y/n]?:", true);
    let response = rl.question(":").toLowerCase();


    const exitTerminal = () => {
        LogDisplay("[Exiting Terminal] Press any character to exit...", true);
        rl.keyIn();
        exit(0);
    }

    if ("n" == response) {
        exitTerminal();
    } else if ("y" == response) {
        LogDisplay("Zombie World Loaded");
    } else {
        LogDisplay("[Error] Please enter [y/n], would you like to continue?", true);
        response = rl.question(":").toLowerCase();
        if ('y' != response) {
            LogDisplay(`[Wrong Input] You entered ${response}`)
            exitTerminal();
        }

    }

    return response;
}
