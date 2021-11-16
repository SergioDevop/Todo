import 'package:flutter/material.dart';
import 'package:pruebas/page/lineas/lineas.dart';

void main() {
  runApp(MyApp());
}


class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'dxdxddxdx',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
      appBar: AppBar(
      title: const Text('Kaypi'),
      ),
      body: Lineas(),
      ),
    );
  }
}


