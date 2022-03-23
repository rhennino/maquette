// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
  professeur: "Hennino Renaud",
  questionnaires: ["questionnaire1", "questionnaire2", "questionnaire3"],
  questionnaire1: [
    {intitule: "que pensez vous de cet élève",format: "reponselibre"}, 
    {intitule: "etes vous heureux ?",format: "vraifaux"}, 
    {intitule: "choisir parmi les reponses la bonne",format: "reponsesimposees",reponses: ["hier","demain","aujourd'hui","jamais"]}, 
    {intitule: "vous mangez a la cantine",format: "choixmultiples",reponses: ["lundi","mardi","mercredi","jeudi","vendredi"]}, 
    {intitule: "que pensez vous de cet élève",format: "reponselibre"}
  ],
  questionnaire2: [
    {intitule: "que pensez vous de cet élève",format: "reponselibre"}, 
    {intitule: "etes vous heureux ?",format: "vraifaux"}, 
    {intitule: "choisir parmi les reponses la bonne",format: "reponsesimposees",reponses: ["hier","demain","aujourd'hui","jamais"]}
  ],
  questionnaire3: [
    {intitule: "que pensez vous de cet élève",format: "reponselibre"}, 
    {intitule: "etes vous heureux ?",format: "vraifaux"}, 
    {intitule: "choisir parmi les reponses la bonne",format: "reponsesimposees",reponses: ["hier","demain","aujourd'hui","jamais"]}, 
    {intitule: "vous mangez a la cantine",format: "choixmultiples",reponses: ["lundi","mardi","mercredi","jeudi","vendredi"]}],
  
  eleves: ["eleve 1","eleve 2","eleve 3","eleve 4"]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

