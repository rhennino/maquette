export const environment = {
  production: true,
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
