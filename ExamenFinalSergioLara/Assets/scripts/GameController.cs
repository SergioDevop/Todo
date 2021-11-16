using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class GameController : MonoBehaviour
{
    
    public TextMeshProUGUI textoContador;
    public TextMeshProUGUI textoPuntos;
    
    float contador = 3;
    float puntos=0;
    // Start is called before the first frame update
    void Start()
    {
        textoContador = GetComponent<TextMeshProUGUI>();
        textoPuntos = GetComponent<TextMeshProUGUI>();
        //Convert.ToInt32(contador--);  
        /*contador--;
        textoContador.text = contador.ToString();*/
    }

    // Update is called once per frame
    void Update()
    {
        textoContador.text = "Contador :" + timepo();
        //textoPuntos.text = "Puntos :" + puntosOb();
        
       /* if (timepo()  == "0")
        {
              textoContador.text = "Contador :" + timepo();
        }*/
       
    }

    public string timepo() {
        contador -= Time.deltaTime;
        
        string segundos = Mathf.Floor(contador % 60).ToString();


        return segundos;
    }

   /* public string puntosOb() {
        contador += Time.deltaTime;
        
        string segundos = Mathf.Floor(contador % 60).ToString();
        puntos++;


        return puntos.ToString();
    }*/
}
