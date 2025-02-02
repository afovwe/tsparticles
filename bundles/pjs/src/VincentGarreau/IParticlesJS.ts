import type { Container, ISourceOptions } from "tsparticles-engine";

/**
 * [[include:pjsMigration.md]]
 */
export interface IParticlesJS {
    /**
     * Loads the provided options to create a {@link Container} object.
     * @deprecated this method is obsolete, please use the new tsParticles.load
     * @param tagId - the particles container element id
     * @param options - the options object to initialize the {@link Container}
     */
    (tagId: string, options: ISourceOptions): Promise<Container | undefined>;

    /**
     * Loads the provided json with a GET request.
     * The content will be used to create a {@link Container} object.
     * @deprecated this method is obsolete, please use the new tsParticles.loadJSON
     * @param tagId - the particles container element id
     * @param pathConfigJson - the json path to use in the GET request
     * @param callback - called after the {@link Container} is loaded and it will be passed as a parameter
     */
    load(tagId: string, pathConfigJson: string, callback: (container?: Container) => void): void;

    /**
     * Adds an additional click handler to all the loaded {@link Container} objects.
     * @deprecated this method is obsolete, please use the new tsParticles.setOnClickHandler
     * @param callback - the function called after the click event is fired
     */
    setOnClickHandler(callback: EventListenerOrEventListenerObject): void;
}
