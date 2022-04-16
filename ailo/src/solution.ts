import ConsoleDisplay from './ui/console/ConsoleDisplay';
import LogDisplay from './ui/console/LogDisplay';
import ZombieWorld from './ZombieWorld';

function solution(inputPath: string) {
    ConsoleDisplay(); // User would've decided whether to run Zombie World
    runZombieWorld(inputPath);
}

async function runZombieWorld(inputPath: string) {
    LogDisplay('[Initiating] Zombie World');

    const zombieWorld = new ZombieWorld(inputPath);
    zombieWorld.run();
}

solution("input.txt");