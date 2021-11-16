using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    private Rigidbody rb;
    public float speed = 2.0f;
    public int puntos = 0;
    public int empuje = 9;
    bool choque;
    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody>();
        choque = true;
    }

    // Update is called once per frame
    void Update()
    {
        transform.Translate(Vector3.right * Input.GetAxis("Horizontal") * speed * Time.deltaTime);
        transform.Translate(Vector3.forward * Input.GetAxis("Vertical") * speed * Time.deltaTime);



        if (Input.GetKeyDown(KeyCode.Space) && choque == true)
        {
            jump();          
        }
        //Debug.Log("se ejecuta " + speed);

    }

    public void jump() {
        choque = false;
        rb.AddForce(0,empuje,0,ForceMode.Impulse);
    }

    void OnCollisionEnter(Collision obj) {
        if (obj.gameObject.CompareTag("Choque"))
        {
            choque = true;
        }
    }
}
