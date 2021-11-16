import 'package:flutter/material.dart';

class Lineas extends StatefulWidget {
  const Lineas({Key? key}) : super(key: key);

  @override
  State<Lineas> createState() => _LineasState();
}

class _LineasState extends State<Lineas> {
  String? _chooseValue;
  final myItems = ['Minibus', 'Taxitrufi', 'Micro'];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
      child: Column(
        children: <Widget>[
          Column(
            children: [
              TextField(
                obscureText: true,
                decoration: InputDecoration(
                  prefixIcon: new Icon(Icons.search),
                  enabledBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.all(Radius.circular(20.0)),
                      borderSide: BorderSide(color: Colors.grey)),
                  labelText: 'Buscar Linea...',
                ),
              ),
            ],
          ),
          Divider(),
          Column(
            children: [
              Row(
                children: <Widget>[
                  Expanded(
                    child: Text('Deliver features faster',
                        textAlign: TextAlign.center),
                  ),
                  Expanded(
                    child: DropdownButton(
                      isExpanded: true,
                      hint: Text('Categoria..'),
                      icon: Icon(Icons.arrow_drop_down_sharp),
                      value: _chooseValue,
                      onChanged: (value) {
                        setState(() {
                          _chooseValue = value.toString();
                        });
                      },
                      items: myItems.map((String items) {
                        return DropdownMenuItem<String>(
                            value: items, child: Text(items));
                      }).toList(),
                    ),
                  ),
                ],
              )
            ],
          ),
          Divider(),
          Column(
            children: <Widget>[
              //Text('asdasdasd')
               SizedBox(
                 height: 500,
                 child: _buildListView(context),
               )
            ],
          ),
        ],
      ),
    ));
  }

  Widget _buildListView(BuildContext context) {
    return ListView.builder(
        itemCount: 8,
        shrinkWrap: true,
        itemBuilder: (_, index) {
          return ListTile(
            title: Text('items de la lista #$index'),
            subtitle: Text('subtitulo'),
            trailing: Icon(Icons.arrow_forward),
            onTap: () {},
          );
        });
  }
}
