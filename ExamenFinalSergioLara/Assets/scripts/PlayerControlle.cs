using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class PlayerControlle : MonoBehaviour
{
    //public float velocidad = 0.1f;
    private Rigidbody rb;
    public TextMeshProUGUI textoChoque;
    public float speed = 0.5f;
    float speedHor = 2.0f;
    float contador = 0;

    bool choque;
    //Vector3 posicion;
    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody>();
        textoChoque = GetComponent<TextMeshProUGUI>();
        choque = false;
    }

    // Update is called once per frame
    void Update()
    {             
        contador += Time.deltaTime;       
        string segundos = Mathf.Floor(contador % 60).ToString();
        if (segundos == "10")
        {
            speed+=2;
        }   

        if (choque)
        {
            textoChoque.text = "Ganaste";
        }           
       
        rb.MovePosition(transform.position + transform.forward * speed);
        transform.Translate(Vector3.right * Input.GetAxis("Horizontal") * speedHor * Time.deltaTime);
    }

     void OnCollisionEnter(Collision obj) {
        if (obj.gameObject.CompareTag("Choque"))
        {
            choque = true;

        }
    }
}
