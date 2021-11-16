using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObjetoController : MonoBehaviour
{
    // Start is called before the first frame update
    public GameObject objetoObstaculo;
    
    float tiempoCreacion = 2000f;
    void Start()
    {
        InvokeRepeating("Crear",0.0f,tiempoCreacion);
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    public void Crear() {
        float posz =Random.Range(-160,150);
        float posx =Random.Range(-11,10);

        Vector3 posicionAleatoria = posicionAleatoria = new Vector3(posx,0,posz);
         ///posicionAleatoria = this.transform.position + Random.onUnitSphere * 2f;
        GameObject _objetoObstaculo = Instantiate(objetoObstaculo, posicionAleatoria,Quaternion.identity);

    }
}
